const chocolates = [
    {
        id:1,
        name: 'Amul Chocominis Chocolate',
        price: 139,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5MZcV0D9dB5DD6zn_rZ36hwzeH3qEAhuHchlhCb_CtdeYnp11xnQFRzkAYi6HnvEXxSn0EycWX3NYC6wLEwG_MO8brHsJMmP0fOkpdncr7zuokNjNHH5X7Q'
    },
    {   
        id:2,
        name: 'Ferrero Rocher Chocolate 300',
        price: 499,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSP9HhzD4GPXPn1G2ylcPzxTgr22hYhU4fHwZCnoo0ykAGDpKKX9k4CS8Vd2SfZ0LyanbIuhw6VSdEqF4gqJiEVOMDHEwT0VzP_TbHh0_zAh0VXfbCpLM37'
    },
    {
        name: 'Cadbury Celebrations Rich Dry Fruit Chocolate Gift',
        price: 440,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_3wgOLpQ5zmrrZzKzwPPCh1OTLOl_EeDj1NfW2_69uKeRUdOkGLGivmtUBr19_khph5xy0l9N7wI3coEPSGmwqK7sG4U4aZr01Dt9Wd_vVfjUZC8vYp7mUA'
    },
    {
        id:3,
        name: "Hershey'S Kisses Milk Chocolate",
        price: 125,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTKuqXfg5jjzW1mthjO60N1BTqHI-ELWTkgcfw_ly-07vhaCO42i6W0FAA8VPlops_tBzytGM9Uws37gA082s6jHbLItOWa5L61DAqS9bnrKzeNO4MG_y1fOA'
    },
    {
        id:4,
        name: 'Ferrero Rocher 200g',
        price: 275,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3y4yh1tTlzQZ0IK2RIt_K2YeXuWNMG8UqSqFSbNRpyY4-bljmJDcAbhpLVF5a-s5rs5d4u2E__p4_kqQpTiSQtI_nHvkvnQfbWCcQjZHB5fTrhf8SX4LU'
    },
    {
        id: 5,
        name : 'Ferrero Rocher Chocolate',
        price: 570,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqlvwvGkwjL-MamWuaUEHTyQz1E4-bXPBG41BPq996NuGPz-NiSHTtUk8H6tTbu-GpoqmwXsYSSS71oneWtHwZQLWYrN1LAhYAcCWpDfEY9PKYiD4BTqddyQ'
    },
    {   
        id: 6,
        name: 'Hersheys Exotic Dark Chocolate',
        price: 150,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8D5BZlvEvuUqkCML1VKQgLT9r3M0qZs1TvLnfN4fWemhnAVhYz5nZBvBD7UOOQii2_p7Oz_6DNHYaDaO1DpggnsUAIKcVcAsaqGnfDN_WHEBsMo4rM9vd'
    },
    {   
        id: 7,
        name: 'Ferrero Rocher Moments',
        price: 185,
        img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbXPBISfKphnIZGSHMzOU2ljWNs6SSWoq4jsJK0RcZSOZjY6XTAWTyuwDjd3zPeRRMmCgfTPYn2O4Ij54JSLrIz8C1hw08whhXJz58sZQ'
    },
    {   
        id: 8,
        name: 'Amul Almondo Chocolate 200gm',
        price: 178,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSe9NdsHOm5Ecq6Zc4joHW3FcIyA8TkFsJhYDiTP3DYKH1dQUA1IriTWrWjT3rgq3qtLXadoUSy5Ir8vKKYrGUUIN_tbNEnBbRueaiHC7nKIvrlFDU938L3'
    },
    {
        id:9,
        name: 'Amul Dark Chocolate',
        price: 109,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfppwohkQgKlwVt-lrluGbP9qD9_sCn4aK4su1lYXQ5FN3aiMmvdbHpgXd_68JntKHWRAWVG2SRxtBz-2MKfIwzbRsu_8_GpP27o5gWx9Y'
    },
    {
        id:10,
        name: 'Cadbury Celebrations Chocolate Gift Pack',
        price: 135,
        img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRB-mZ-7Q3DqytXvXDQ2Kg29wy6NTABVvVqkhq1LJO0qhIl-fZEinT0aYxOKKQTvfP857830UlQLaKkA-_2Dcmj8U5bejDAbEmUeUVvjkf4G8juobHvT6QLLg'
    },
    {
        id:11,
        name: 'Cadbury Celebrations Premium Selections Assorted Chocolate Gift Pack Bars',
        price: 330,
        img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR45xg2KMscNZbeKZtmmXomYqyiC4DpxcK7A-cp0_7Beri6OsdsJplLVp3LcOxmUmiqZf_zTgrhuolqH0ebzuL7grjgFw06YofsZzXEfv-qMfU9PEIngQKj'
    }

]

export default chocolates;