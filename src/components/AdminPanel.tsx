import { useEffect, useState } from 'react';
import { ArrowLeft, Check, FileText, LogOut, Plus, Save, Trash2, Upload } from 'lucide-react';
import { usePortfolioContent } from '../lib/PortfolioProvider';
import { type Project, type PortfolioContent } from '../lib/portfolio';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

type AdminSection = 'profile' | 'contact' | 'projects' | 'resume' | 'advanced';

const inputClass = 'mt-2 w-full border border-border bg-bg px-3 py-3 font-body text-sm text-primary outline-none transition-colors placeholder:text-muted focus:border-accent';
const labelClass = 'font-body text-[10px] font-medium uppercase tracking-wide-3 text-muted';

function Field({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {multiline ? <textarea rows={4} value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} /> : <input value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} />}
    </label>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setError('');
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) setError(signInError.message);
    setBusy(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 py-16">
      <div className="w-full max-w-md border border-border bg-bg-elevated p-8 md:p-10">
        <a href="/" className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-wide text-secondary hover:text-accent"><ArrowLeft size={14} /> Back to portfolio</a>
        <p className="mt-16 font-body text-[10px] uppercase tracking-wide-3 text-accent">Private workspace</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-primary">Admin sign in</h1>
        <p className="mt-4 font-body text-sm leading-relaxed text-secondary">Use the owner account created in Supabase Authentication to manage your portfolio.</p>
        <form onSubmit={signIn} className="mt-10 space-y-6">
          <Field label="Email" value={email} onChange={setEmail} />
          <Field label="Password" value={password} onChange={setPassword} />
          {error && <p className="font-body text-sm text-accent">{error}</p>}
          <button disabled={busy} className="inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 font-body text-xs font-medium tracking-wide text-bg transition-colors hover:bg-accent disabled:opacity-50">{busy ? 'SIGNING IN...' : 'SIGN IN'}</button>
        </form>
      </div>
    </main>
  );
}

function ProjectEditor({ project, onChange, onDelete }: { project: Project; onChange: (project: Project) => void; onDelete: () => void }) {
  const update = (key: keyof Project, value: string | string[]) => onChange({ ...project, [key]: value });
  const updateDetails = (key: keyof Project['details'], value: string | string[]) => onChange({ ...project, details: { ...project.details, [key]: value } });
  return (
    <div className="border-t border-border py-8">
      <div className="flex items-start justify-between gap-4">
        <div><span className={labelClass}>Project {project.index}</span><h3 className="mt-2 font-display text-2xl text-primary">{project.title || 'Untitled project'}</h3></div>
        <button onClick={onDelete} title="Delete project" className="text-secondary hover:text-accent"><Trash2 size={16} /></button>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Title" value={project.title} onChange={(value) => update('title', value)} />
        <Field label="Category" value={project.category} onChange={(value) => update('category', value)} />
        <div className="md:col-span-2"><Field label="Description" value={project.description} onChange={(value) => update('description', value)} multiline /></div>
        <div className="md:col-span-2"><Field label="Technologies (comma separated)" value={project.technologies.join(', ')} onChange={(value) => update('technologies', value.split(',').map((item) => item.trim()).filter(Boolean))} /></div>
        <Field label="Overview" value={project.details.overview} onChange={(value) => updateDetails('overview', value)} multiline />
        <Field label="Role / context" value={project.details.role} onChange={(value) => updateDetails('role', value)} multiline />
        <Field label="What was built (one item per line)" value={project.details.whatWasBuilt.join('\n')} onChange={(value) => updateDetails('whatWasBuilt', value.split('\n').filter(Boolean))} multiline />
        <Field label="Challenges (one item per line)" value={project.details.challenges.join('\n')} onChange={(value) => updateDetails('challenges', value.split('\n').filter(Boolean))} multiline />
        <Field label="Key functionality (one item per line)" value={project.details.keyFunctionality.join('\n')} onChange={(value) => updateDetails('keyFunctionality', value.split('\n').filter(Boolean))} multiline />
      </div>
    </div>
  );
}

function Editor({ userEmail }: { userEmail: string }) {
  const { content, saving, saveContent } = usePortfolioContent();
  const [section, setSection] = useState<AdminSection>('profile');
  const [draft, setDraft] = useState<PortfolioContent>(content);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => setDraft(content), [content]);

  const updateProfile = (key: keyof PortfolioContent['profile'], value: string | string[]) => setDraft((current) => ({ ...current, profile: { ...current.profile, [key]: value } }));
  const updateContact = (key: keyof PortfolioContent['contact'], value: string) => setDraft((current) => ({ ...current, contact: { ...current.contact, [key]: value } }));
  const save = async () => {
    setNotice('');
    setError('');
    try { await saveContent(draft); setNotice('Changes published.'); } catch (saveError) { setError(saveError instanceof Error ? saveError.message : 'Unable to save changes.'); }
  };
  const updateProject = (index: number, project: Project) => setDraft((current) => ({ ...current, projects: current.projects.map((item, itemIndex) => itemIndex === index ? project : item) }));
  const addProject = () => setDraft((current) => ({ ...current, projects: [...current.projects, { id: `project-${Date.now()}`, index: String(current.projects.length + 1).padStart(2, '0'), title: 'New project', category: 'Category', description: '', technologies: [], details: { overview: '', role: '', whatWasBuilt: [], challenges: [], keyFunctionality: [] }, visualization: 'flutter-app' }] }));

  const uploadResume = async (file: File) => {
    if (!supabase) return;
    setUploading(true);
    setError('');
    const path = `resume-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '-')}`;
    const { error: uploadError } = await supabase.storage.from('portfolio-assets').upload(path, file, { upsert: true, contentType: file.type || 'application/pdf' });
    if (uploadError) setError(uploadError.message);
    else {
      const { data } = supabase.storage.from('portfolio-assets').getPublicUrl(path);
      setDraft((current) => ({ ...current, resumeUrl: data.publicUrl }));
      setNotice('Resume uploaded. Save changes to publish the link.');
    }
    setUploading(false);
  };

  const nav = [{ id: 'profile', label: 'Profile' }, { id: 'contact', label: 'Contact' }, { id: 'projects', label: 'Projects' }, { id: 'resume', label: 'Resume' }, { id: 'advanced', label: 'Advanced' }] as const;
  return (
    <div className="min-h-screen bg-bg text-primary">
      <header className="border-b border-border px-6 py-5 md:px-10"><div className="mx-auto flex max-w-[1500px] items-center justify-between"><div><p className="font-body text-[10px] uppercase tracking-wide-3 text-accent">Portfolio CMS</p><h1 className="mt-1 font-display text-xl font-medium">Admin workspace</h1></div><div className="flex items-center gap-5"><span className="hidden font-body text-xs text-secondary sm:block">{userEmail}</span><button onClick={() => void supabase?.auth.signOut()} title="Sign out" className="text-secondary hover:text-accent"><LogOut size={17} /></button></div></div></header>
      <div className="mx-auto grid max-w-[1500px] md:grid-cols-[220px_1fr]">
        <aside className="border-b border-border p-6 md:min-h-[calc(100vh-81px)] md:border-b-0 md:border-r md:p-8"><a href="/" className="mb-10 inline-flex items-center gap-2 font-body text-xs text-secondary hover:text-accent"><ArrowLeft size={14} /> View site</a><nav className="flex gap-2 overflow-x-auto md:flex-col">{nav.map((item) => <button key={item.id} onClick={() => setSection(item.id)} className={`whitespace-nowrap px-3 py-2 text-left font-body text-xs uppercase tracking-wide transition-colors ${section === item.id ? 'bg-primary text-bg' : 'text-secondary hover:text-primary'}`}>{item.label}</button>)}</nav></aside>
        <main className="max-w-5xl p-6 md:p-12"><div className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end"><div><p className={labelClass}>Editing {section}</p><h2 className="mt-2 font-display text-4xl font-medium capitalize">{section}</h2></div><button onClick={() => void save()} disabled={saving} className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 font-body text-xs font-medium tracking-wide text-bg hover:bg-accent disabled:opacity-50"><Save size={15} /> {saving ? 'PUBLISHING...' : 'PUBLISH CHANGES'}</button></div>
          {notice && <p className="mb-6 flex items-center gap-2 font-body text-sm text-accent"><Check size={15} /> {notice}</p>}{error && <p className="mb-6 font-body text-sm text-accent">{error}</p>}
          {section === 'profile' && <div className="space-y-6"><div className="grid gap-5 md:grid-cols-2"><Field label="Name" value={draft.profile.name} onChange={(value) => updateProfile('name', value)} /><Field label="Role" value={draft.profile.role} onChange={(value) => updateProfile('role', value)} /><Field label="Location" value={draft.profile.location} onChange={(value) => updateProfile('location', value)} /><Field label="Availability status" value={draft.profile.status} onChange={(value) => updateProfile('status', value)} /></div><Field label="Hero description" value={draft.profile.heroDescription} onChange={(value) => updateProfile('heroDescription', value)} multiline /><Field label="About title" value={draft.profile.aboutTitle} onChange={(value) => updateProfile('aboutTitle', value)} /><Field label="About paragraphs (one per line)" value={draft.profile.aboutBody.join('\n')} onChange={(value) => updateProfile('aboutBody', value.split('\n').filter(Boolean))} multiline /><Field label="Introduction paragraphs (one per line)" value={draft.profile.introductionBody.join('\n')} onChange={(value) => updateProfile('introductionBody', value.split('\n').filter(Boolean))} multiline /></div>}
          {section === 'contact' && <div className="space-y-6"><div className="grid gap-5 md:grid-cols-2"><Field label="Email" value={draft.contact.email} onChange={(value) => updateContact('email', value)} /><Field label="Phone" value={draft.contact.phone} onChange={(value) => updateContact('phone', value)} /><Field label="Location" value={draft.contact.location} onChange={(value) => updateContact('location', value)} /></div><Field label="Contact message" value={draft.contact.message} onChange={(value) => updateContact('message', value)} multiline /><p className="font-body text-xs leading-relaxed text-muted">The contact form uses these details for mail and phone links. Save to publish them.</p></div>}
          {section === 'projects' && <div>{draft.projects.map((project, index) => <ProjectEditor key={project.id} project={project} onChange={(next) => updateProject(index, next)} onDelete={() => setDraft((current) => ({ ...current, projects: current.projects.filter((_, itemIndex) => itemIndex !== index) }))} />)}<button onClick={addProject} className="mt-6 inline-flex items-center gap-2 border border-border px-4 py-3 font-body text-xs text-secondary hover:border-accent hover:text-accent"><Plus size={15} /> ADD PROJECT</button></div>}
          {section === 'resume' && <div className="max-w-xl space-y-8"><div className="border border-border p-6"><FileText className="text-accent" size={22} /><h3 className="mt-5 font-display text-2xl">Resume PDF</h3><p className="mt-2 font-body text-sm leading-relaxed text-secondary">Upload a PDF to Supabase Storage. The public hero will show a download link after you publish.</p><label className="mt-6 inline-flex cursor-pointer items-center gap-2 bg-primary px-4 py-3 font-body text-xs font-medium tracking-wide text-bg hover:bg-accent"><Upload size={15} /> {uploading ? 'UPLOADING...' : 'UPLOAD PDF'}<input type="file" accept="application/pdf" className="hidden" disabled={uploading} onChange={(event) => { const file = event.target.files?.[0]; if (file) void uploadResume(file); }} /></label></div><Field label="Published resume URL" value={draft.resumeUrl} onChange={(value) => setDraft((current) => ({ ...current, resumeUrl: value }))} /></div>}
          {section === 'advanced' && <div><Field label="Full content JSON" value={JSON.stringify(draft, null, 2)} onChange={(value) => { try { setDraft(JSON.parse(value) as PortfolioContent); setError(''); } catch { setError('JSON is not valid yet. Finish the edit before publishing.'); } }} multiline /><p className="mt-3 font-body text-xs leading-relaxed text-muted">Use this for education, certifications, skills, FAQ, and current focus. Keep the existing object shape.</p></div>}
        </main>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!supabase) { setChecking(false); return; }
    void supabase.auth.getSession().then(({ data }) => { setSessionEmail(data.session?.user.email ?? null); setChecking(false); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setSessionEmail(session?.user.email ?? null));
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) return <main className="flex min-h-screen items-center justify-center bg-bg px-6"><div className="max-w-lg border border-border p-8"><p className={labelClass}>Setup required</p><h1 className="mt-3 font-display text-3xl text-primary">Connect Supabase to enable admin access.</h1><p className="mt-4 font-body text-sm leading-relaxed text-secondary">Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your deployment environment, run the SQL in supabase/schema.sql, then create your owner account in Supabase Authentication.</p><a href="/" className="mt-8 inline-flex items-center gap-2 font-body text-xs uppercase tracking-wide text-accent"><ArrowLeft size={14} /> Back to portfolio</a></div></main>;
  if (checking) return <div className="flex min-h-screen items-center justify-center bg-bg font-body text-sm text-secondary">Checking session...</div>;
  return sessionEmail ? <Editor userEmail={sessionEmail} /> : <Login />;
}