<template>
<!-- :style="`width:${customWidth}px; height:${customHeight}px`" -->
    <div class="custom-search-container">
        <custom-input customWidth="160" v-model="filterText" clearable></custom-input>
        <ul class="item-container">
            <li class="item-list" @click="itemClick(item)" v-for="(item, index) in resultArr" :key="index">{{item.label}}</li>
        </ul>
        <div class="btn-container">
            <el-button type="primary" size="mini" @click="searchFun(filterText)">查询</el-button>
            <el-button plain size="mini" @click="resetForm">重置</el-button>
        </div>
        
    </div>
</template>


<script>
export default {
    name: 'CustomSearch',

    props: {
        customWidth: {
            type: [String, Number],
            default: 240
        },
        customHeight: {
            type: [String, Number],
            default: 30
        }
    },

    watch: {
       
    },

    data() {
        return {
            filterText: '',
            resultArr: [
                {
                    label: '医疗器械及设备',
                    value: 1
                },
                {
                    label: '医疗消毒',
                    value: 2
                }
            ]
        }
    },

    computed: {
        
    },
    mounted() {
        
    },

    methods: {
        itemClick(item) {
            this.filterText = item.label;
        },
        searchFun(v) {
            alert(v)
            this.$emit('search',v)
        },
        resetForm() {
            this.filterText = '';
        },
        blurFun() {
            this.$emit('blur');
        },
        focusFun() {
            this.$emit('focus');
        },
        changeFun() {
            this.$emit('change');
        },
        clearFun() {
            this.$emit('clear');
        },
        inputFun(val) {
            this.$emit('input', val);
        }
    }
}
</script>


<style lang="scss" scoped>
    
    .custom-search-container {
        width: 160px;
       .item-container {
           width: 100%;
           padding: 10px 0;
           margin: 0;
           .item-list {
               cursor: pointer;
               list-style: none;
               &:hover {
                   background: #f5f7fa;
               }
           }
       }
       .btn-container {
           text-align: center;
       }
    }
</style>