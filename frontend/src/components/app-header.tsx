import { SidebarTrigger } from "./ui/sidebar";

export default function AppHeader() {
  return (
    <header className='w-full flex items-center h-10 border-b'>
      <SidebarTrigger />
    </header>
  )
}
