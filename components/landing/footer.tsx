import { Gift } from "lucide-react";

import Container from "../shared/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-black/60 to-black text-white">
              <Gift className="h-4 w-4" />
            </div>

            <span className="font-semibold text-slate-900">GiveFlow</span>
          </div>

          <p>© 2026 GiveFlow. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
