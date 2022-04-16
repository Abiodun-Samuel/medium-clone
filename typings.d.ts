export interface Post {
   _id: string;
   _createdAt: string;
   title: string;
   author: {
      name: string;
      image: string;
   }
   description: string;
   mainImage: {
      asset: {
         url: string;
      };
   };
   slug: {
      current: string;
   };
   body: [object]
}
export interface Post_One {
   _id: string;
   _createdAt: string;
   title: string;
   author: {
      name: string;
      image: string;
   }
   description: string;
   mainImage: {
      asset: {
         url: string;
      };
   };
   slug: {
      current: string;
   };
   body: [object]
}