for (let i = 0; i < num_list.length; i++) {
  if (num_list[i] < 0) {
    return i;
  }
}
return -1;

return num_list.findIndex((a) => a < 0);
