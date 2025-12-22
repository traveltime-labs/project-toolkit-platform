import AdminLayout from "@/components/admin/layout";

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
    return (
      <AdminLayout>
        <main>{children}</main>
      </AdminLayout>
    );
  }
  