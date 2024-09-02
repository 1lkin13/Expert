import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
const publicRoutes = ["/api/webhook/clerk"];
const ignoredRoutes = ["/api/webhook/clerk"];
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};