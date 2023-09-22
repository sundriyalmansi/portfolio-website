export const heroOptions = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 50,
        duration: 0.4,
        size: 20,
        color: {
          value: "#ffffff",
        },
        opacity: 0.5,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    color: {
      value: "#a9a9a9",
    },
    links: {
      color: "transparent",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 5 },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};