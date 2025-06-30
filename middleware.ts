import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", 
  "/sign-up(.*)",
  "/", // Add home route if it should be public
]);

export default clerkMiddleware((auth, req) => {
  // Check if the route is public
  if (!isPublicRoute(req)) {
    // Get auth status
    const { userId } = auth();
    
    // If no user is authenticated, protect will handle the redirect
    if (!userId) {
      auth().protect();
    }
  }
});

export const config = {
  matcher: [
    // Skip all paths that should not be intercepted by middleware
    "/((?!_next|[^?]*\\.(?:html?|css|js(?:on)?|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};  