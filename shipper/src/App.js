import { useEffect} from 'react';


function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.item');

    setInterval(() => {
      items.forEach(item => {
        item.classList.toggle('item-animation');
      });
    }, 2000);
  }, []);

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: (event, gesture) => {
  //       // Xử lý sự kiện di chuyển
  //     },
  //     onPanResponderRelease: () => {
  //       // Xử lý sự kiện khi nhả chuột hoặc chạm
  //     },
  //   })
  // ).current;

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.item} {...panResponder.panHandlers} />
  //   </View>
  // );
}


export default App;