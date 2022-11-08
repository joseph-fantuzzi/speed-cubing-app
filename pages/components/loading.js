import Logo from "./logo";

const Loading = () => (
  <div className="container">
    <div className="inner">
      <div className="loading-animation">
        <Logo />
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        height: calc(100vh - 64px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      @media (prefers-reduced-motion: no-preference) {
        .loading-animation {
          animation: logo-spin infinite 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
      @keyframes logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loading;
