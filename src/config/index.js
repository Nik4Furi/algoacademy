
//-------Creating the function, to return the eles according their json data -------X
export const FilterBtnData = (data)=>{
    const content = [... new Set(data.map( ele => ele.cate))];
    return content
}
//------Of the given data filtering the content
export const FilterContent = (data)=>{
    const content = data.map( ele => ele);
    return content
}


