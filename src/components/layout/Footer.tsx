import { personalInfo } from '../../data/content';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-textSecondary">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-textSecondary">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
