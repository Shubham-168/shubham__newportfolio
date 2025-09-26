import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Progress,
    Tooltip,
} from "@chakra-ui/react";

export default function GitStats() {
    const [heatmap, setHeatmap] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);

    const username = "Shubham-168";
    const gitHubToken  = import.meta.env.VITE_GITHUB_TOKEN

    // Fetch contributions (heatmap)
    const fetchContributions = async () => {
        const query = `
      {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

        const res = await axios.post(
            "https://api.github.com/graphql",
            { query },
            {
                headers: {
                    Authorization: `Bearer ${gitHubToken}`,
                },
            }
        );

        return res.data.data.user.contributionsCollection.contributionCalendar;
    };

    // Fetch repos for languages
    const fetchLanguages = async () => {
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=100`
        );

        const repos = res.data;
        const langCount = {};
        let total = 0;

        repos.forEach((repo) => {
            if (repo.language) {
                langCount[repo.language] = (langCount[repo.language] || 0) + 1;
                total++;
            }
        });

        const langData = Object.entries(langCount).map(([lang, count]) => ({
            language: lang,
            percent: ((count / total) * 100).toFixed(1),
        }));

        return langData.sort((a, b) => b.percent - a.percent);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [heatmapData, langData] = await Promise.all([
                    fetchContributions(),
                    fetchLanguages(),
                ]);

                setHeatmap(heatmapData);
                setLanguages(langData);
            } catch (err) {
                console.error("Error fetching GitHub data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Text>Loading GitHub Stats...</Text>;

    return (
        <Box py={12} px={6} maxW="6xl" mx="auto">
            <Heading fontSize="3xl" className="gradient-text" textAlign="center" mb={8}>
                GitHub Stats
            </Heading>

            {/*  Contribution Heatmap + Languages in One Container */}
            <Box
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                shadow="md"
                overflowX="auto"
            >
                {/* Heatmap */}
                <VStack spacing={1} align="center" mb={6}>
                    {Array.from({ length: 7 }).map((_, dayIndex) => (
                        <HStack key={dayIndex} spacing={1}>
                            {heatmap.weeks.map((week, wi) => {
                                const day = week.contributionDays[dayIndex];
                                return day ? (
                                    <Tooltip
                                        key={wi}
                                        label={`${day.contributionCount} contributions on ${day.date}`}
                                        aria-label="contribution tooltip"
                                    >
                                        <Box
                                            w="12px"
                                            h="12px"
                                            borderRadius="2px"
                                            bg={day.color}
                                            transition="all 0.3s"
                                            _hover={{ transform: "scale(1.2)" }}
                                        />
                                    </Tooltip>
                                ) : (
                                    <Box key={wi} w="12px" h="12px" />
                                );
                            })}
                        </HStack>
                    ))}
                </VStack>

                {/* Languages inline at bottom */}
                <Box>
                    <Heading fontSize="lg" className="gradient-text" mb={3}>
                        Top Languages
                    </Heading>
                    <VStack spacing={2} align="stretch">
                        {languages.map((lang, i) => (
                            <Box key={i}>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm" fontWeight="medium">
                                        {lang.language}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500">
                                        {lang.percent}%
                                    </Text>
                                </HStack>
                                <Progress
                                    value={lang.percent}
                                    size="xs"
                                    colorScheme={i % 2 === 0 ? "blue" : "purple"}
                                    borderRadius="sm"
                                />
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </Box>

        </Box>
    );
}
