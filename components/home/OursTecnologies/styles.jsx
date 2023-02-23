import styled from 'styled-components'

export const ContainerTech = styled.div`
    max-width: var(--width-max-desktop);
    margin: auto;
.card {
    position: relative;
}
.container
{
    width: 1050px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .card {
    position: relative;
    width: 10.375rem;
    height: 10.375rem;
    overflow: hidden;
    margin: 15px;
    border-radius: 50%;
}
.container .card span {
    position: absolute;
    display: block;
    transform: translate(-50%,-50%);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    opacity: 0.95;
    background: var(--color-background-secondary);
    z-index: 1;
    transition: width 1s, height 1s;
}
.container .card:hover span {
    top: var(--y);
    left: var(--x);
    width: 1000px;
    height: 1000px;
}
.container .card .img
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container .card .img img
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container .card .content
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.container .card .content div
{
    padding: 40px;
    color: var(--color-base-white);
    visibility: hidden;
    font-weight: 800;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.2s;
}
.container .card:hover .content div
{
    transform: translateY(0px); 
    visibility: visible;
    opacity: 1;
}

`
export const ContentTech = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill,minmax(max(166px, 20%),1fr));
`

export const CircleImage = styled.div`
    align-items: center;
    border-radius: 100%;
    margin: auto;
    display: flex;
    height: 10.375rem;
    justify-content: center;
    overflow: hidden;
    width: 10.375rem;

`
