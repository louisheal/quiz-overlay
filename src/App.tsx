import { type MutableRefObject, useEffect, useRef, useState } from "react";

const App = () => {
	// A ref is used because this is not going to change with subsequent re-renders.
	// This will probably not be used in the future because data fetching will happen inside the useEffect hook.
	const channelID = useRef<string | null>(null);
	const overlayID = useRef<string | null>(null);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		(channelID as MutableRefObject<string | null>).current =
			params.get("channel");
		(overlayID as MutableRefObject<string | null>).current =
			params.get("overlay");

		setLoading(false);
	}, []);

	if (loading) {
		return <>Loading...</>;
	}

	if (!channelID.current || !overlayID.current) {
		return <>Missing channel ID or overlay ID.</>;
	}

	return (
		<>
			Quiz Overlay (Channel ID: {channelID.current}, Overlay ID:{" "}
			{overlayID.current})
		</>
	);
};

export default App;
