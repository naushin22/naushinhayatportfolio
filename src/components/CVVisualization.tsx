import { motion } from 'framer-motion';
import { Cpu, Camera, Wifi, Smartphone, Activity, Box } from 'lucide-react';

interface CVVisualizationProps {
  variant: 'cabin-detection' | 'realtime-pipeline' | 'flutter-app';
}

export default function CVVisualization({ variant }: CVVisualizationProps) {
  if (variant === 'cabin-detection') {
    return (
      <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border bg-bg-elevated">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#F1F1ED 1px, transparent 1px), linear-gradient(90deg, #F1F1ED 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
        </div>

        {/* Bounding boxes */}
        <div className="absolute inset-0 p-8">
          {/* Box 1 - detected */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-[12%] top-[20%] h-[35%] w-[30%] border border-accent bbox-pulse"
          >
            <span className="absolute -top-5 left-0 font-body text-[9px] font-medium tracking-wide text-accent">
              cabin · 0.94
            </span>
            <span className="absolute -bottom-px -right-px h-2 w-2 border-r border-b border-accent" />
            <span className="absolute -top-px -left-px h-2 w-2 border-l border-t border-accent" />
          </motion.div>

          {/* Box 2 - detected */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute right-[15%] top-[35%] h-[28%] w-[25%] border border-accent bbox-pulse"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="absolute -top-5 left-0 font-body text-[9px] font-medium tracking-wide text-accent">
              cabin · 0.87
            </span>
            <span className="absolute -bottom-px -right-px h-2 w-2 border-r border-b border-accent" />
            <span className="absolute -top-px -left-px h-2 w-2 border-l border-t border-accent" />
          </motion.div>

          {/* Box 3 - low confidence */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-[15%] left-[30%] h-[20%] w-[22%] border border-dashed border-muted"
          >
            <span className="absolute -top-5 left-0 font-body text-[9px] font-medium tracking-wide text-muted">
              partial · 0.41
            </span>
          </motion.div>

          {/* Scan line */}
          <div className="absolute left-0 right-0 h-px bg-accent/30 scan-line" />
        </div>

        {/* Corner brackets */}
        <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-border-hover" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-border-hover" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-l border-b border-border-hover" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-border-hover" />

        {/* Status bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-border bg-bg/80 px-4 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Camera size={11} strokeWidth={1.5} className="text-accent" />
            <span className="font-body text-[9px] font-medium tracking-wide text-secondary">
              YOLOV8 · DETECTION
            </span>
          </div>
          <span className="font-body text-[9px] font-medium tracking-wide text-muted">
            FRAME ANALYSIS
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'realtime-pipeline') {
    return (
      <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border bg-bg-elevated">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#F1F1ED 1px, transparent 1px), linear-gradient(90deg, #F1F1ED 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />
        </div>

        {/* Pipeline diagram */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          {/* Nodes */}
          {[
            { icon: Camera, label: 'VISION INPUT', sub: 'OpenCV · RTSP', delay: 0.1 },
            { icon: Cpu, label: 'DETECTION', sub: 'Python · YOLOv8', delay: 0.3 },
            { icon: Activity, label: 'PLC / MODBUS', sub: 'Rockwell Automation', delay: 0.5 },
            { icon: Box, label: 'DEPLOY', sub: 'Docker · PyInstaller', delay: 0.7 },
          ].map((node, i) => (
            <div key={i} className="flex w-full max-w-[220px] flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: node.delay }}
                className="flex w-full items-center gap-3 border border-border bg-bg px-3 py-2.5"
              >
                <node.icon size={14} strokeWidth={1.5} className="text-accent shrink-0" />
                <div className="flex-1">
                  <p className="font-body text-[9px] font-medium tracking-wide text-primary">
                    {node.label}
                  </p>
                  <p className="font-body text-[8px] font-light tracking-wide text-muted">
                    {node.sub}
                  </p>
                </div>
                <span className="font-body text-[8px] font-medium text-accent">0{i + 1}</span>
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: node.delay + 0.2 }}
                  className="h-4 w-px origin-top bg-border-hover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Connection indicators */}
        <div className="absolute right-4 top-4 flex flex-col gap-1.5">
          <Wifi size={10} strokeWidth={1.5} className="text-accent" />
          <span className="font-body text-[8px] font-medium tracking-wide text-muted">LIVE</span>
        </div>

        {/* Corner brackets */}
        <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-border-hover" />
        <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-border-hover" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-l border-b border-border-hover" />
        <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-border-hover" />

        {/* Status bar */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-border bg-bg/80 px-4 py-2 backdrop-blur-sm">
          <span className="font-body text-[9px] font-medium tracking-wide text-secondary">
            TATA MOTORS · INTERNSHIP
          </span>
          <span className="font-body text-[9px] font-medium tracking-wide text-muted">
            SDLC · PRODUCTION
          </span>
        </div>
      </div>
    );
  }

  // Flutter app
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border bg-bg-elevated">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#F1F1ED 1px, transparent 1px), linear-gradient(90deg, #F1F1ED 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
      </div>

      {/* Phone frame abstraction */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[70%] w-[40%] max-w-[140px] border border-border-hover bg-bg"
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-0 h-3 w-12 -translate-x-1/2 border-b border-border-hover bg-bg" />

          {/* Screen content abstraction */}
          <div className="flex h-full flex-col gap-2 p-3 pt-6">
            <div className="h-2 w-16 bg-border-hover" />
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full bg-border" />
              <div className="h-1.5 w-3/4 bg-border" />
              <div className="h-1.5 w-2/3 bg-border" />
            </div>
            <div className="mt-auto space-y-1.5">
              <div className="flex gap-1.5">
                <div className="h-6 w-6 border border-border-hover" />
                <div className="h-6 w-6 border border-border-hover" />
                <div className="h-6 w-6 border border-border-hover" />
              </div>
              <div className="h-2 w-full bg-accent/30" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating labels */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute left-6 top-12 flex items-center gap-2"
      >
        <Smartphone size={11} strokeWidth={1.5} className="text-accent" />
        <span className="font-body text-[9px] font-medium tracking-wide text-secondary">
          DART · FLUTTER
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-14 right-6 font-body text-[9px] font-medium tracking-wide text-muted"
      >
        REMOTE · AGILE
      </motion.div>

      {/* Corner brackets */}
      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-border-hover" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-border-hover" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-l border-b border-border-hover" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-r border-b border-border-hover" />

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-border bg-bg/80 px-4 py-2 backdrop-blur-sm">
        <span className="font-body text-[9px] font-medium tracking-wide text-secondary">
          EKANA TECH · INTERNSHIP
        </span>
        <span className="font-body text-[9px] font-medium tracking-wide text-muted">
          MOBILE · 2024–25
        </span>
      </div>
    </div>
  );
}
