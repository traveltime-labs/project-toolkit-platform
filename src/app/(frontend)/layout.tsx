// 前台外殼
export default function FrontendLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  