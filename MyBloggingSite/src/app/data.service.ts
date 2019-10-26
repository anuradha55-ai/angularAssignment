import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){

    let  blogs =  [
     {  id:  0,  title:  'Positively Present', subtitle: `“Progress is impossible without change, and those who cannot change 
     their minds cannot change anything.” - George Bernard Shaw`, imageSrc: '../assets/img/PositivelyPresent.png', 
              description: `Positively Present was launched in 2009 by author, blogger and designer Dani DiPirro to share her 
              perception of living a positive life. As the slogan reminds, the blog strives to be a source of “Positivity, 
              awareness and self-love” with the purpose of inspiring people to live a happy present life. Present is the starting 
              point and the destination for filling life with positiveness.`, likes: 0, comments: [] },
     {  id:  1,  title:  'TinyBuddha', subtitle: `"As long as you feel pain, you're still alive. As long as you make mistakes, you're still
      human. And as long as you keep trying, there' still hope." - Susan Gale`, imageSrc: "../assets/img/TinyBuddha.png", 
              description: `Lori Deschene founded Tiny Buddha in 2009 with the objective of providing a valuable resource and 
              reference for happiness and peace. Personal stories about mindfulness, spirituality, social relationships, personal
               development and meditation are shared by readers of all ages from all over the world. As Lori underlines, Tiny Buddha 
               is an online community made by people to help the others by sharing their meaningful wisdom.`, likes: 0, comments: [] },
     {  id:  2,  title:  'Think Simple Now', subtitle: `“Success, in life, is most easily measured by the number of days you are
      truly happy.” - Eric Edmeades`, imageSrc: "../assets/img/ThinkSimpleNow.png", 
      description: `“Chief Happiness Officer” Tina Su started Think Simple Now back in 2007 as a personal mission to spread 
      happiness, positiveness and compliance in everyone’s lives. Nowadays, her blog is a personal development community
       enclosing lessons, epiphanies and real life stories of authors from over 200 countries. Their aim is to aspire to find 
       inner clarity and to increase the awareness of what makes life beautiful.`, likes: 0, comments: [] },
     {  id:  3,  title:  'Peace Revolution', subtitle: `“Kindness in words creates confidence. Kindness in thinking creates 
     profundity. Kindness in giving creates love.” - Lao Tzu`, imageSrc: "../assets/img/PeaceRevolution.png", 
     description: `The Peace Revolution blog takes its name as homage to the respective organization that strives to bring about 
     world peace through inner peace and to disseminate this positive state of being with people around us. The turning point in 
     this process of sharing good thoughts and mindfulness is ourselves and this why it is important to focus on self-development. 
     Meditation, life wisdom, inner balance and healthy eating mark the beginning of a peace revolution.`, likes: 0, comments: [] }
    ];
 
    return {blogs};
 
   }
}
