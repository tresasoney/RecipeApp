export class RecipeModel{
    constructor(
        public _id:String,
        public name: String,
        public ingredients: String,
        public steps: String,
        public author: String,
        public time: Number,
        public img: String
    ){}
}