import Spline from "@splinetool/react-spline";

export default function Cube() {
  return (
    <div className="container">
      <Spline scene="https://prod.spline.design/7NVPfOQiG2WPECyD/scene.splinecode" />
      <style jsx>{`
        .container {
          height: 600px;
          width: 90%;
          margin: 0 auto;
        }
        @media (min-width: 800px) {
          .container {
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
}
