<template>
    <div class="project-container">
        <div class="card box-shadow project-tile" style="width: 18rem;">
            <div class="card-body">
                <div class="hidden-buttons">
                    <div class="buttons">
                        <a :href=[projectLink] target="_blank" rel="noopener noreferrer">
                            <div class="view-link">VIEW</div>
                        </a>

                        
                        <div class="view-link">CODE</div>
                    </div>
                </div>
                <h5 class="card-title">{{projectName}}</h5>
                <p class="card-text">{{projectstack}}</p>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'project-container',
    props: {
        projectName: String,
        projectstack: String,
        projectLink: String,
        projectImg: String,
    }
}
</script>

<style lang="less">
.project-container {
    margin: 20px;
    float: left;
    color: #2c3e50;
    .project-tile {
        overflow: hidden;
        display: inline-flex;
        .card-body {
            &:hover > .hidden-buttons {
                bottom: 0;
            }
            .hidden-buttons {
                 -webkit-transition: all 0.5s ease-out;
                    -moz-transition: all 0.5s ease-out;
                        -ms-transition: all 0.5s ease-out;
                        -o-transition: all 0.5s ease-out;
                            transition: all 0.5s ease-out;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                text-align: center;
                color: #2c3e50;
                font-size: 14px;
                bottom: -105px;
                left: 0;
                align-items: center;
                justify-content: center;
                height: 99px;
                width: 286px;
                &:after {
                    content:'';
                    background: #ffffff;
                    width:286px;
                    height:99px;
                    position:absolute;
                    top:0;
                    left:0;
                    opacity:0.8;
                }
                .buttons {
                    display: inline-flex;
                    position: relative;
                    margin: 43px 0;
                    width: 195px;
                    z-index: 10;
                    a {
                        text-decoration: none;
                    }
                    .view-link {
                        width: 90px;
                        line-height: 35px;
                        border: solid 2px #89c9b8;
                        z-index: 15;
                        opacity: 1;
                        color: #2c3e50;
                        &.view-link:hover {
                            background-color:#89c9b8;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

}
</style>
