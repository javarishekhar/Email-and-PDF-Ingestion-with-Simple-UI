
import { PDFList } from "@/components/PDFList";
import { EmailConfig } from "@/components/EmailConfig";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Email PDF Ingestion</h1>
          <p className="mt-2 text-gray-500">Configure email accounts and manage PDF attachments</p>
        </header>
        
        <section>
          <EmailConfig />
        </section>

        <section>
          <header className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Downloaded PDFs</h2>
            <p className="text-gray-500">PDFs automatically downloaded from configured email accounts</p>
          </header>
          <PDFList />
        </section>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Index;
