<template>
    <div class="login-container">
        <el-form autoComplete="on"
                 :model="loginForm"
                 :rules="loginRules"
                 ref="loginForm"
                 label-width="0px"
                 class="card-box login-form"
                 label-position="left">
            <h3 class="title">系统登陆</h3>
            <el-form-item prop="email">
                <span class="svg-container"><icon-svg icon-class="jiedianyoujian"></icon-svg></span>
                <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="youxiang">

                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:'login',
        data(){

            const validateEmail = (rule,value,callback)=>{
                callback();
            }

            const validatePass = (rule,value,callback)=>{
                callback();
            }

            return {
                loginForm:{
                    email: 'hellokitty',
                    password: ''
                },
                loginRules: {
                    email: [
                        { required: true, trigger: 'blur', validator: validateEmail }
                    ],
                    password: [
                        { required: true, trigger: 'blur', validator: validatePass }
                    ]
                },
            }
        }
    }
</script>
