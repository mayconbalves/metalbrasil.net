import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import TrendingCard from "@/components/TrendingCard";
import { posts } from "@/lib/posts";
import { Helmet } from "react-helmet";

const Index = () => {
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  const trendingPosts = posts.slice(0, 5);

  return (
    <>
      <Helmet>
        <title>Metal Brasil - Notícias, Reviews e Vídeos de Heavy Metal Nacional</title>
        <meta name="description" content="O melhor portal de notícias sobre heavy metal brasileiro. Reviews, entrevistas, vídeos e cobertura completa da cena metal nacional." />
        <link rel="canonical" href="https://metalbrasil.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-metal font-black mb-6 border-b-4 border-primary pb-2 inline-block">
                  LATEST NEWS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featuredPosts.map((post) => (
                  <NewsCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    category={post.category}
                    author={post.author}
                    date={post.date}
                    slug={post.slug}
                    featured={true}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <NewsCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    category={post.category}
                    author={post.author}
                    date={post.date}
                    slug={post.slug}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
                  <h3 className="text-2xl font-metal font-black mb-6 border-b-2 border-primary pb-2">
                    TRENDING
                  </h3>
                  <div className="space-y-4">
                    {trendingPosts.map((post, index) => (
                      <TrendingCard
                        key={post.slug}
                        title={post.title}
                        image={post.image}
                        slug={post.slug}
                        index={index + 1}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-secondary text-secondary-foreground rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-metal font-black mb-4">
                    NEWSLETTER
                  </h3>
                  <p className="text-sm mb-4">
                    Receba as últimas notícias do metal brasileiro direto no seu email!
                  </p>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-2 rounded bg-background text-foreground mb-3"
                  />
                  <button className="w-full bg-primary text-primary-foreground font-bold py-2 rounded hover:bg-primary/90 transition-colors">
                    ASSINAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-secondary text-secondary-foreground mt-16 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-metal text-2xl font-black mb-2">METAL BRASIL</p>
            <p className="text-sm">A voz do heavy metal nacional</p>
            <p className="text-xs mt-4 opacity-70">© 2025 Metal Brasil. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
