/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Type {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Type> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
