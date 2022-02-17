function recursiva(max) {
    console.log(max);
    if (max >= 200000) return;
    max++;
    recursiva(max);
}

recursiva(0);