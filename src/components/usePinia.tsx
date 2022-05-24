import { defineComponent } from 'vue';
// import { useUserStore } from '@/store/user';
// import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'UsePinia',
  setup() {
    // const useStore = useUserStore();
    const useStore = { name: '123', getname: 'adfaf' };
    // const { name, homeTown } = storeToRefs(useStore);
    return () => {
      return (
        <div>
          <div>直接store.state：{useStore.name}</div>
          {/* <div>
            storeToRefs解构：{name}
            {homeTown}
          </div> */}
          <div>getters: {useStore.getname}</div>
          <button
            onClick={() => {
              console.log('asdfasf');
            }}
          >
            点击修改name
          </button>
        </div>
      );
    };
  },
});
