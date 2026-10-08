// [3-9]

// export import

function add(a, b) {
  return a + b;
}

export function subs(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

export const pi = 3.14159;

export default add;