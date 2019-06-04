<template>
<div class="faq-page">

        <div class="container">
            <div class="breadcrumb-row">
                <div class="breadcrumb-item"><a href="#">FAQ</a></div>
                <div class="breadcrumb-item">Casedrop.com</div>
            </div>

            <div class="board-title success">5 Ease steps to success</div>

            <div class="steps-wrapper">

                <div class="step-item-wrapper step1">
                     <div class="step-item">
                        <div class="step-item-bg1"></div>
                        <div class="step-item-bg2"></div>
                        <div class="step-item-bg3"></div>
                        <div class="step-item-icon">
                            <img src="@/assets/img/sign-steam.svg" alt="">
                        </div>
                     </div>
                    <div class="step-name">Sign in with Steam</div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="199">
                        <defs>
                            <clipPath id="clip_0">
                                <rect x="-255.46973" y="-257.59912" width="372.5625" height="2324.79" clip-rule="evenodd"/>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#clip_0)">
                            <path fill="none" stroke="rgb(231,76,80)" stroke-width="2" stroke-miterlimit="4" transform="matrix(0.9935 0 0 0.9935 0.356934 1.20776)" d="M0 0L81.5325 0L81.5325 198.404L0 198.404"/>
                        </g>
                    </svg>
                </div>
                <!--end step-item-wrapper-->

                <div class="step-item-wrapper step2">
                    <div class="step-item">
                        <div class="step-item-bg1"></div>
                        <div class="step-item-bg2"></div>
                        <div class="step-item-bg3"></div>
                        <div class="step-item-icon">
                            <img src="@/assets/img/trade-url.svg" alt="">
                        </div>
                    </div>
                    <div class="step-name">Enter Trade-URL</div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="84" height="199">
                        <defs>
                            <clipPath id="clip_0">
                                <rect x="-35.938965" y="-454.37427" width="372.60001" height="2325.0239" clip-rule="evenodd"/>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#clip_0)">
                            <path fill="none" stroke="rgb(231,76,80)" stroke-width="2" stroke-miterlimit="4" transform="matrix(-0.9936 0 0 0.9936 83.3252 1.19116)" d="M0 0L83.5325 0L83.5325 198.404L0 198.404"/>
                        </g>

                    </svg>
                </div>
                <!--end step-item-wrapper-->

                <div class="step-item-wrapper step3">
                    <div class="step-item">
                        <div class="step-item-bg1"></div>
                        <div class="step-item-bg2"></div>
                        <div class="step-item-bg3"></div>
                        <div class="step-item-icon">
                            <img src="@/assets/img/acc-balance.svg" alt="">
                        </div>
                    </div>
                    <div class="step-name">Fill up your account balance, even with needless<br> CS:GO skins</div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="229">
                        <defs>
                            <clipPath id="clip_0">
                                <rect x="-255.46973" y="-650.59912" width="372.5625" height="2324.79" clip-rule="evenodd"/>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#clip_0)">
                            <path fill="none" stroke="rgb(231,76,80)" stroke-width="2" stroke-miterlimit="4" transform="matrix(0.9935 0 0 0.9935 0.356934 0.640137)" d="M0 0L81.5325 0L81.5325 228.404L0 228.404"/>
                        </g>

                    </svg>
                </div>
                <!--end step-item-wrapper-->

                <div class="step-item-wrapper step4">
                    <div class="step-item">
                        <div class="step-item-bg1"></div>
                        <div class="step-item-bg2"></div>
                        <div class="step-item-bg3"></div>
                        <div class="step-item-icon">
                            <img src="@/assets/img/open-case.svg" alt="">
                        </div>
                    </div>
                    <div class="step-name">Open cases</div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="84" height="199">
                        <defs>
                            <clipPath id="clip_0">
                                <rect x="-35.938965" y="-878.37427" width="372.60001" height="2325.0239" clip-rule="evenodd"/>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#clip_0)">
                            <path fill="none" stroke="rgb(231,76,80)" stroke-width="2" stroke-miterlimit="4" transform="matrix(-0.9936 0 0 0.9936 83.3252 0.464844)" d="M0 0L83.5325 0L83.5325 198.404L0 198.404"/>
                        </g>

                    </svg>
                </div>
                <!--end step-item-wrapper-->

                <div class="step-item-wrapper step5">
                    <div class="step-item">
                        <div class="step-item-bg1"></div>
                        <div class="step-item-bg2"></div>
                        <div class="step-item-bg3"></div>
                        <div class="step-item-icon">
                            <img src="@/assets/img/gift-icon.svg" alt="">
                        </div>
                    </div>
                    <div class="step-name">Withdraw CS:GO items INSTANTLY or sell the items <br> back to us</div>
                </div>
                <!--end step-item-wrapper-->

                <div class="steps-line">
                    <div class="line part1"></div>
                    <div class="line part2"></div>
                    <div class="line part3"></div>
                    <div class="line part4"></div>
                </div>

            </div>
            <!-- /.steps-wrapper -->

            <div class="board-title ask">Frequently Asked questions</div>

            <div class="question-wrapper">

                <div class="question-item" 
                    :class="show == item.id ? 'open' : ''"
                    v-for="item in question" 
                    :key="item.id" 
                    @click="show == item.id ? show = 0 : show = item.id">
                    <div class="item-title">{{ item.title }}</div>
                    <p v-if="show == item.answer.id">{{ item.answer.text }}</p>
                </div>
                <!-- /.question-item -->
                <!-- <div class="question-item">
                    <div class="item-title">Replenished the account, but the money did not come, why?</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae debitis facilis nesciunt nulla optio.</p>
                </div> -->
                <!-- /.question-item -->
                <!-- <div class="question-item">
                    <div class="item-title">I have money on the Steam account, and here they are not displayed, why?</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam cum eligendi harum iste iure nobis numquam quos rerum unde.</p>
                </div> -->
                <!-- /.question-item -->
                <!-- <div class="question-item">
                    <div class="item-title">I can not go to the site through Steam, do not load the page with cases, advertise in the middle of the page, and in general the site lags very much, what to do?</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur consequatur cum dolor ducimus ea, esse, explicabo incidunt ipsam labore natus nihil officiis quae quas quidem repellat sapiente soluta tenetur ut voluptates! Ad, commodi suscipit!</p>
                </div> -->
                <!-- /.question-item -->
                <p>Still have questions? Ask our team, we will reply in fast - support@casedrop.com </p>

            </div>
            <!-- /.question-wrapper -->

        </div>

    </div>
</template>


<script>
import { faq } from '@/mixin/faq'

export default {
    data() {
        return {
            show: 0
        }
    },
    mixins: [
        faq
    ]
}
</script>