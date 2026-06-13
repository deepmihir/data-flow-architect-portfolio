import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page not found (404) | Deep Katbamna</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist on Deep Katbamna's portfolio. Return to the homepage to explore data engineering work."
        />
        <link rel="canonical" href="https://deepkatbamna-portfolio.lovable.app/404" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Page not found (404) | Deep Katbamna" />
        <meta
          property="og:description"
          content="This page doesn't exist. Head back to the Deep Katbamna data engineering portfolio."
        />
        <meta property="og:url" content="https://deepkatbamna-portfolio.lovable.app/404" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:underline">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
