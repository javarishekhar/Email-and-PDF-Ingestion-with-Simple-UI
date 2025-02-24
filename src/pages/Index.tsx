
import { PDFList } from "@/components/PDFList";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium text-gray-500">Documents</span>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">PDF Collection</h1>
        </header>
        <PDFList />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Index;
