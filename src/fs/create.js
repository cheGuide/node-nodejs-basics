import fs from "fs/promises";

const create = async () => {
    
    const content = "I am fresh and young";
    
    await fs.writeFile("./src/fs/files/fresh.txt", content, { flag: 'a+' });
};

await create();