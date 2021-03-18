
let currentComponent: (() => any)|null = null;
let hookCallNumber: number = 0;

const componentHooksStates = new Map<() => any, Map<number, any>>();

const getHookState = (initValue) => {
  let currentComponentHooksStates = componentHooksStates.get(currentComponent);
  if (!currentComponentHooksStates) {
    currentComponentHooksStates = new Map<number, any>();
    componentHooksStates.set(currentComponent, currentComponentHooksStates);
  }
  let currentHookState = currentComponentHooksStates.get(hookCallNumber)
  if (!currentHookState) {
    currentHookState = { initValue };
    currentComponentHooksStates.set(hookCallNumber, currentHookState);
  }
  hookCallNumber++;

  return currentHookState;
}

const useState = initValue => {
  const currentHookState = getHookState(initValue);
  return currentHookState.initValue;
};

const Component = () => {
  const state = useState(Math.random());
  return `Component with: ${state}`;
};

function render(component: () => any) {
  // start rendering of component
  currentComponent = component;
  hookCallNumber = 0;
  const renderResult = component();
  currentComponent = null;
  // end rendering of component
  return renderResult;
}

render(Component);  /*? */
render(Component);  /*? */
render(Component);  /*? */



