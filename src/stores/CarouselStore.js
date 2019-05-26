import {types, applySnapshot} from 'mobx-state-tree';
import carouselData from '../stores/carousel.json'

export const Button = types.model({
  title: types.maybeNull(types.string),
  url: types.maybeNull(types.string),
  payload: types.maybeNull(types.string)
});

const CarouselItem = types.model({
  title: types.maybeNull(types.string),
  subtitle: types.maybeNull(types.string),
  image_url: types.maybeNull(types.string),
  full_price: types.maybeNull(types.string),
  monthly_price: types.maybeNull(types.string),
  button: types.maybeNull(types.array(Button)),
});

const CarouselStore = types.model({
  carousel: types.optional(types.array(CarouselItem), [])
})
  .actions(self => ({
    afterCreate() {
      self.loadCarousel();
    },
    loadCarousel() {
      console.log('first load carousel', carouselData);
      applySnapshot(self.carousel, carouselData);
    },

    addCarouselItem(item) {
      self.carousel.push(item);
    },
    editCarouselItem(index, item) {
      self.carousel[parseInt(index)] = item;
    },
    saveCarouselItem(editIdx, item) {
      if(editIdx){
        self.editCarouselItem(editIdx, item);
        self.outputJSON();
      }else{
        self.addCarouselItem(item);
        self.outputJSON();
      }
    },
    deleteCarouselItem(index) {
      self.carousel = self.carousel.filter((_, idx) => idx !== parseInt(index));
      self.outputJSON();
    },
    outputJSON(){
      JSON.stringify(self.carousel);
    }
  }))
  .create({
    carousel: []
  });

export default CarouselStore;
