import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import './index.less';

export default defineComponent({
  name: 'IndexRender',
  setup() {
    return () => {
      return <RouterView />;
    };
  },
});
