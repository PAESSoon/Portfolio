<template>
  <div class="main-container">
    <div class="top-section">
      <div :class="{ 'hidden-navbar': !showNavbar }" class="background-navbar">
      </div>
      <div class="navbar-details">
        <span @click="scrollToTop" ref="home">Home</span>
        <span @click="scrollMeTo('projects')" >Projects</span>
        <span @click="scrollMeTo('contact')">Contact</span>
      </div>
      <div ref="welcomeSection" class="welcome-section">
        <div v-scrollAnimation class="title bolder">
          <span class="fade-in one">Hello, </span>
          <span class="fade-in two">my </span>
          <span class="fade-in three">name </span>
          <span class="fade-in four">is </span>
          <span class="fade-in five">Pamela </span>
        </div>
        <div v-scrollAnimation class="subtitle">
        </div>
      </div>
    </div>
    <div class="middle-container">
      <div v-scrollAnimation class="profile">
        <h2 class="about-me">About me</h2>
        <p class="about-details">I am a creative thinker with a logical mind. When programming, I never stop looking for patterns in code, design and systems architecture.  I thrive when I’m learning new concepts and my innate realistic nature empowers me with the knowledge that every disarray can be organized and harmonized to work together when we have the right tools, methods and conditions.</p>
      </div>
      <hr>

      <div v-scrollAnimation ref="projects" class="projects">
        <div>
          <h2>My projects</h2>
        </div>
        <div>
          <div>
            <div class="projects-group">
              <div v-for="(project, index) in projectsList"
                :key="index">
                <Project 
                  :projectName="project.name"
                  :projectstack="project.stack"
                  :projectLink="project.link"
                  :projectImg="project.imgURL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div v-scrollAnimation ref="contact" class="contact-me">
        <h2>Let's get in touch.</h2>
        <p class="project-paragraph">I'm available for hire and looking forward to working on new projects!</p>
        <a class="btn" href="mailto:pamelaess@mail.com">CONTACT ME</a>
      </div>
    </div>
    <div class="bottom-container">
      <a class="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pamela-sam-soon/">LinkedIn</a>
      <a class="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/P5500n?hr_r=1">Hackerrank</a>
      <a id="profile-link" class="footer-link" target="_blank" rel="noopener noreferrer" href="https://github.com/PAESSoon">GitHub</a>
      <div class="copyright">
        <span>
          © {{currentYear}} Made with
        </span>
        <div class="ice-cream"></div>
        <div class="tea"></div>
        <div class="mango"></div>
        <span>
          in Montréal
        </span> 
      </div> 
    </div>
  </div>
</template>

<script>
import store from '../store/listOfProjects.js';
import Project from './Project';

export default {
  name: 'main-container',
  components: {
    Project,
  },
  props: {
    msg: String
  },
  data() {
    return {
      offSet: window.pageYOffset,
      visibilty: false,
      showNavbar: false,
      projectsList: [],
    }
  },
  computed: {
    positionNumber() {
      let positionResult = ''
      for(let i = 0; i < this.testName.length; i++) {
        positionResult = 'position' + i.toString();
      }
      return positionResult
    },
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    },
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
      }
    }
  },
  mounted() {
    this.showNavbar = false,
    this.lastScrollPosition = 0,
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      this.showNavbar = window.pageYOffset > 0 && window.innerWidth < 1635;
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
  created() {
    this.projectsList = store;
    console.log('ProjectList:', this.projectsList);
  },
}
</script>

<style lang="less" scoped>
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: scroll;
    hr {
      border: dotted #E5C2C5 5px;
      border-bottom: none;
      width: 5%;
      margin: 80px auto;
    }
  .top-section {
    .background-navbar {
      position: fixed;
      z-index: 10;
      background-color: #E5C2C5;
      transform: translate3d(0, 0, 0);
      transition: 0.3s all ease-in-out;
      &.hidden-navbar {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
      }
    }
    width: 100%;
    height: 1500px;
    margin: 0;
    background-attachment: fixed;
    background-position-y: top;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/lum3n--RBuQ2PK_L8-unsplash.jpg');
    background-size: cover;
    .navbar {
      font-family: 'Montserrat', sans-serif;
      text-align: left;
    }
    .navbar-details {
      text-align: end;
      margin-right: 50px;
      padding-top: 10px;
      position: fixed;
      right: 0;
      z-index: 40;
      span {
        padding-right: 20px;
        cursor: pointer;
      }
    }
    .welcome-section {
      padding-top: 280px;
      display: block;
      color: #2c3e50;
      line-height: 76px;
      @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      >.before-enter {
        opacity: 0;
        transform: translateX(-200px);
        transition: all 2s ease;
      }
      >.enter {
        opacity: 1;
        transform: translateY(0px);
      }
      .title {
        font-weight: 450;
        .fade-in {
          font-size: 38px;
          opacity:0;
          -webkit-animation:fadeIn 1;
          -moz-animation:fadeIn 1;
          animation:fadeIn 1;

          -webkit-animation-fill-mode:forwards;
          -moz-animation-fill-mode:forwards;
          animation-fill-mode:forwards;

          -webkit-animation-duration:1s;
          -moz-animation-duration:1s;
          animation-duration:1s;
          &.one {
            -webkit-animation-delay: 0.5s;
            -moz-animation-delay: 0.5s;
            animation-delay: 0.5s;
          }
          &.two {
            -webkit-animation-delay: 1s;
            -moz-animation-delay:1s;
            animation-delay: 1s;
          }

          &.three {
            -webkit-animation-delay: 1.4s;
            -moz-animation-delay: 1.4s;
            animation-delay: 1.4s;
          }
          &.four {
            -webkit-animation-delay: 1.7s;
            -moz-animation-delay: 1.7s;
            animation-delay: 1.7s;
          }
          &.five {
            -webkit-animation-delay: 1.9s;
            -moz-animation-delay: 1.9s;
            animation-delay: 1.9s;
            font-weight: 500;
            font-size: 48px;
          }
        }
      }
      .subtitle {
        font-size: 32px;
        .fade-in {
          opacity:0;
          -webkit-animation:fadeIn 1;
          -moz-animation:fadeIn 1;
          animation:fadeIn 1;

          -webkit-animation-fill-mode:forwards;
          -moz-animation-fill-mode:forwards;
          animation-fill-mode:forwards;

          -webkit-animation-duration:1s;
          -moz-animation-duration:1s;
          animation-duration:1s;
        }
      }
    }
  }
  .middle-container {
    position: relative;
    display: block;
    >.before-enter {
      opacity: 0;
      transform: translateY(100px);
      transition: all 2s ease-in-out;
    }
    >.enter {
      opacity: 1;
      transform: translateY(0px);
    }
    .profile {
      height: 300px;
      margin: 300px 0 200px 0;
      .about-me {
        font-family: 'Montserrat', sans-serif;
        position: relative;
      }
    }
    .projects {
      margin: 200px auto 300px auto;
      padding-top: 100px;
        .projects-group {
          display: inline-flex;
          flex-flow: row wrap;
          justify-content: space-around;
          margin: 30px auto;
          max-width: 1400px;
        }
    }
    .contact-me {
      margin: 300px auto 500px auto;
      padding-top: 175px;
      line-height: 5;
       >.before-enter {
          opacity: 0;
          transform: translateY(100px);
          transition: all 2s ease-in-out;
        }
        >.enter {
          opacity: 1;
          transform: translateY(0px);
        }
        .project-paragraph {
          line-height: 4;
          width: 75vw;
          font-size: 20px;
          margin: auto;
        }
      .btn {
        background: #fb3569;
        background-image: -webkit-linear-gradient(top, #fb3569, #d1173c);
        -webkit-border-radius: 8;
        -moz-border-radius: 8;
        border-radius: 8px;
        font-family: 'Montserrat', sans-serif;
        color: #E4F1F1;
        text-decoration: none;
      }

      .btn:hover {
        text-decoration: none;
      }
    }
  }
  .bottom-container {
    font-family: 'Montserrat', sans-serif;
    color: #fb3569;
    background-color: #89c9b8;
    padding-top: 40px;
    .footer-link {
      margin: auto 30px;
      text-decoration: none;
      color: #2c3e50;
      &:hover {
        color: #E4F1F1;
      }
    }
    .copyright {
      color: #DDDDDD;
      font-size: .8rem;
      padding-top: 10px;
      >svg {
        padding-bottom: 3px;
      }
      .ice-cream {
        background-image: url('../assets/iceCream.svg');
      }
      .tea {
        background-image: url('../assets/tea.svg');
      }
      .mango {
        background-image: url('../assets/mango.svg');
      }
      .ice-cream, .tea, .mango {
        background-repeat: no-repeat;
        height: 20px;
        width: 20px;
        display: inline-flex;
        padding-bottom: 3px;
        vertical-align: bottom;
      }
    }
  }
}
</style>
