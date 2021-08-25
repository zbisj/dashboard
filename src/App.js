import Feed from "./components/layout/feed";
import { MainLayout } from "./components/layout/main";
function App() {
  return (
    <MainLayout>
      <Feed actions={{ overdue: 2, draft: 0, pending: 1, completed: 9 }} />
    </MainLayout>
  );
}

export default App;
