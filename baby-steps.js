let init = process.argv


total = 0;

for (let i = 2; i < init.length;i++) {
    total = total + Number(init[i])
}

console.log(total)