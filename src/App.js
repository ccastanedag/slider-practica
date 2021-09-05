import './App.css'
import Resetter from './Resetter'
import Slider from './Components/Slider';

const photos = [
  'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://i.pinimg.com/originals/df/43/80/df438062e43d243fd0205cfea646906b.jpg',
  'https://files.oyebesmartest.com/uploads/large/115513299325ek55nr8un8qqhatyti1fip2amjxr8f3nnkz2h5siwurotrssysemnbpxek5q8m7uophqj97wmvzgzprpa9nefghhivukjyryhdi.jpg'
];

function App() {
  return (
    <>
      <Resetter />
      <Slider photos={photos} interval={3000}/>
    </>
  );
}

export default App
