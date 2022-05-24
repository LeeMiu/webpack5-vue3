import { defineComponent } from 'vue';
// import request from '@/utils/axios';
import img from './empty.png';
import './index.less';

export default defineComponent({
  name: 'EmptyPage',
  setup() {
    // const fetchApi = async () => {
    //   const res = await request({
    //     url: '/api/xxx',
    //     method: 'get',
    //     params: {
    //       id: '1',
    //     },
    //   });
    //   console.log(res);
    // };
    return () => {
      return (
        <div class="Empty">
          <div class="Empty-main">
            <img src={img} alt="" />
            <p>啥都没找到</p>
          </div>
        </div>
      );
    };
  },
});
