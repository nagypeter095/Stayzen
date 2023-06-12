import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import prisma from "../libs/prismadb";
import getFavorites from "../actions/getFavorites";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavorites();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
            />
        )
    }

    return (
        <FavoritesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )

}

export default ListingPage;