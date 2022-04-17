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
   };
   comments: Comment[];
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

export interface Comment {
   _id: string;
   _createdAt: string;
   _updatedAt: string;
   _rev: string;
   _type: string;
   email: string;
   post: {
      _ref: string;
      _type: string;
   };
   comment: string;
   approved: boolean;
   name: string;
}

