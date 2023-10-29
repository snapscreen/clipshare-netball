import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Home: React.FC<PageProps> = () => {
  const siteTitle = `Netball ClipShare`;

    function fetchAccessTokenFromApi() {
        return fetch('/api/token', { mode: 'cors', cache: 'no-cache' }).then((response) => response.json());
    }

    const startClipShare = () => {
        SnapoddsSdk.clipShareBuilder()
            .setLanguage('en')
            .setSnapTarget('sport')
            .setAction('share')
            .setVibrate(true)
            .setApiUrl(`https://api.aus.snapscreen.com`)
            .setClipShareApiUrl(`https://clip.aus.snapscreen.com/api`)
            .setAccessTokenProvider(fetchAccessTokenFromApi)
            .onClipCreated((clip) => console.log('Clip shared', clip))
            .onClose(() => console.log('SDK:onClose'))
            .appendTo(document.body);
    };

  return (
    <Layout title={siteTitle}>
      <article className="prose prose-lg my-8 text-center mx-auto">
        <h1 className="sr-only"></h1>
        <p className="lead">Share your broadcast quality TV clip created with ClipShare.</p>
        <p className="maintenance">Sorry we are down again for technical issues - back online for the next game on Oct 31st. Please hang in there with us - we worked all weekend on this and will make it happen for you.</p>
      </article>
    </Layout>
  );
};

export default Home;
