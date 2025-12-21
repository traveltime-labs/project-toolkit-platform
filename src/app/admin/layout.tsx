export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen p-4 bg-gray-100">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    );
  }