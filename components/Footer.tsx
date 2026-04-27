export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Rishan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:rishan@email.com"
              className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              rishan@email.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}