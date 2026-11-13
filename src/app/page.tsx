import { CollectionProvider } from "@/lib/store";
import { App } from "@/components/App";

export default function Page() {
  return (
    <CollectionProvider>
      <App />
    </CollectionProvider>
  );
}
