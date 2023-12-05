const PlayList = ({ playListContent }) => {
  const {
    content: { mainIframe, iframe }
  } = playListContent
  return (
    <section>
      <div>
        <h2>Ouça nossa playlist</h2>
        <iframe
          width={mainIframe.width}
          height={mainIframe.height}
          src={mainIframe.src}
          title={mainIframe.title}
          allow={mainIframe.allow}
          allowFullScreen
        />
      </div>
      <div>
        <ul>
          {iframe.map((content) => {
            return (
              <div key={content.title}>
                <li>
                  <iframe
                    width={content.width}
                    height={content.height}
                    src={content.src}
                    title={content.title}
                    allow={content.allow}
                    allowFullScreen
                  />
                </li>
                <div>
                  <p>{content.videoTitle}</p>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default PlayList
