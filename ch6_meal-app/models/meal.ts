export default class Meal {

  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: 'luxurious' | 'pricey' | 'affordable',
    public complexity: 'challenging' | 'hard' | 'simple',
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {
    this.id = id
    this.categoryIds = categoryIds
    this.title = title
    this.affordability = affordability
    this.complexity = complexity
    this.imageUrl = imageUrl
    this.duration = duration
    this.ingredients = ingredients
    this.steps = steps
    this.isGlutenFree = isGlutenFree
    this.isVegan = isVegan
    this.isVegetarian = isVegetarian
    this.isLactoseFree = isLactoseFree
  }
}
