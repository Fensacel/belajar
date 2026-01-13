export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-sky-400">Hi, I'm Pahri 👋</h1>
        <p className="mt-4 text-gray-400">
          Web Developer • Indonesian Translator • RPL Student
        </p>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold text-sky-400">About Me</h2>
        <p className="mt-3 text-gray-400">
          Saya siswa SMKN 1 Slawi jurusan RPL, fokus di web development (Next.js, PHP, MySQL)
          dan membangun project seperti sistem voting dan dashboard admin.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold text-sky-400">Skills</h2>
        <ul className="grid grid-cols-2 gap-3 mt-4 text-gray-300">
          <li>⚡ Next.js</li>
          <li>⚡ PHP</li>
          <li>⚡ Tailwind CSS</li>
          <li>⚡ MySQL</li>
          <li>⚡ Linux Server</li>
          <li>⚡ Cloudflare</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-2xl font-semibold text-sky-400">Projects</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-zinc-900 rounded-xl">
            <h3 className="font-semibold">Website Voting OSIS</h3>
            <p className="text-gray-400 text-sm">
              Sistem pemilihan OSIS dengan live count dan dashboard admin.
            </p>
          </div>

          <div className="p-4 bg-zinc-900 rounded-xl">
            <h3 className="font-semibold">Dashboard Management System</h3>
            <p className="text-gray-400 text-sm">
              Multi-user management system berbasis PHP + database.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold text-sky-400">Contact</h2>
        <p className="text-gray-400 mt-3">📧 email@example.com</p>
        <p className="text-gray-400">🌐 GitHub: github.com/username</p>
      </section>

      <footer className="text-center text-gray-600 pb-6">
        © 2026 Pahri. All rights reserved.
      </footer>
    </main>
  );
}
