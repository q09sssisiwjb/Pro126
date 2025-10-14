import { Switch, Route, Link } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";
import ChatButton from "@/components/ChatButton";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import TextToImageGenerator from "@/pages/TextToImageGenerator";
import ImageToImage from "@/pages/ImageToImage";
import ImageToSketch from "@/pages/ImageToSketch";
import BGRemover from "@/pages/BGRemover";
import Upscale from "@/pages/Upscale";
import Favorites from "@/pages/Favorites";
import MyArtStyle from "@/pages/MyArtStyle";
import ArtStyles from "@/pages/ArtStyles";
import Effects from "@/pages/Effects";
import Messages from "@/pages/Messages";
import Profile from "@/pages/Profile";
import Auth from "@/pages/Auth";
import Guides from "@/pages/Guides";
import Settings from "@/pages/Settings";
import Admin from "@/pages/Admin";
import MoreTools from "@/pages/MoreTools";
import Support from "@/pages/Support";
import FAQ from "@/pages/FAQ";
import TermsAndConditions from "@/pages/TermsAndConditions";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import DMCA from "@/pages/DMCA";
import CanvasEditor from "@/pages/CanvasEditor";
import API from "@/pages/API";
import { useAuth } from "@/hooks/useAuth";
import { UserAvatar } from "@/components/UserAvatar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/guides" component={Guides} />
      <Route path="/support" component={Support} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/admin" component={Admin} />
      <Route path="/text-to-image" component={TextToImageGenerator} />
      <Route path="/image-to-image" component={ImageToImage} />
      <Route path="/image-to-sketch" component={ImageToSketch} />
      <Route path="/canvas-editor" component={CanvasEditor} />
      <Route path="/bg-remover" component={BGRemover} />
      <Route path="/upscale" component={Upscale} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/my-art-style" component={MyArtStyle} />
      <Route path="/art-styles" component={ArtStyles} />
      <Route path="/effects" component={Effects} />
      <Route path="/messages" component={Messages} />
      <Route path="/more-tools" component={MoreTools} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/dmca" component={DMCA} />
      <Route path="/api" component={API} />
      <Route component={NotFound} />
    </Switch>
  );
}

function TopBar() {
  const { user, loading } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center gap-3">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="CreatiVista ai Logo" className="h-8 w-8" data-testid="img-logo" />
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-brand-name">
            CreatiVista ai
          </span>
        </Link>
      </div>
      
      <div className="flex items-center gap-2">
        {!loading && (
          user ? (
            <UserAvatar user={user} className="h-8 w-8" />
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" data-testid="button-login">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm" data-testid="button-signup">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )
        )}
      </div>
    </header>
  );
}

function App() {
  const { user } = useAuth();
  const sidebarStyle = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Switch>
          <Route path="/login">
            <Auth />
            <Toaster />
          </Route>
          <Route path="/signup">
            <Auth />
            <Toaster />
          </Route>
          <Route>
            <SidebarProvider style={sidebarStyle as React.CSSProperties}>
              <div className="flex h-screen w-full">
                <AppSidebar user={user} />
                <div className="flex flex-col flex-1 overflow-hidden">
                  <TopBar />
                  <main className="flex-1 overflow-auto">
                    <Router />
                    {/* Adsterra Native Banner Ad */}
                    <div className="w-full flex justify-center py-4 mt-8">
                      <div id="container-fcc36959a3b4378011d5b8ab47925cb8"></div>
                    </div>
                  </main>
                </div>
              </div>
              <ChatButton />
              <Toaster />
            </SidebarProvider>
          </Route>
        </Switch>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
